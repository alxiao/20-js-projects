const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleMoneyBtn = document.getElementById('double-money');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortRichestBtn = document.getElementById('sort-richest');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const url = "https://randomuser.me/api";

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortRichestBtn.addEventListener('click', sortRichest);
calculateWealthBtn.addEventListener('click', calculateWealth);

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch(url);
  const data = await res.json();

  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  }

  addData(newUser);
}

// Double the value of money for each person
function doubleMoney() {
  data = data.map(person => {
    return {
      ...person,
      money: person.money * 2,
    };
  });
  updateDOM();
}

// Sort users by money in descending order
function sortRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Filter for millionaires
function showMillionaires() {
  data = data.filter((person) => person.money >= 1000000);
  updateDOM();
}

// Calculate total amount of wealth
function calculateWealth() {
  const total = data.reduce((acc, person) => (acc += person.money), 0);
  console.log(total);

  const wealthElement = document.createElement('div');
  wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total)}</strong></h3>`;
  main.appendChild(wealthElement);
}

// Add new object to data array
function addData(obj) {
  data.push(obj);
  updateDOM();
}

// Update DOM
function updateDOM(providedData=data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(person => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${person.name}</strong><span>${formatMoney(person.money)}`;

    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(num) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(num);
}

