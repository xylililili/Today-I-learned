const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//create dom elements rebder facts in list:
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factslist = document.querySelector(".facts-list");

factslist.innerHTML = "";

loadFacts();
//load data from supabase
async function loadFacts() {
  const res = await fetch(
    "https://gaxaeozinnruawueebbr.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheGFlb3ppbm5ydWF3dWVlYmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExOTU4NzYsImV4cCI6MjAwNjc3MTg3Nn0.KuRd0g0VpX_CaTS9Mt98JNEjzcYCJqMcFckNZE8Pfio",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheGFlb3ppbm5ydWF3dWVlYmJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExOTU4NzYsImV4cCI6MjAwNjc3MTg3Nn0.KuRd0g0VpX_CaTS9Mt98JNEjzcYCJqMcFckNZE8Pfio",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === "society");
  console.log(data);
  createFactsList(data);
}

createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
  ${fact.text}
  <a
  class="spirce"
  href="${fact.source}"
  target="_blank"
  >(Sourve)</a>
  </p>
  <span class="tag" style="background-color:${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">${fact.category}</span>
  </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");

  factslist.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  // console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// let votesInteresting = 23;
// let votesMindblowing = 5;
// let votesFalse = 4;
// let totalUpvotes = votesInteresting + votesMindblowing;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);
// const text = "Lisbon";

// function calcFactAge(year) {
//   const currentyear = new Date().getFullYear();
//   const age = currentyear - year;
//   if (age >= 0) {
//     return age;
//   } else {
//     return `Impossible year. Year needs to be less or equal ${currentyear}.`;
//   }
// }
// // the same as calcFactAge prefer arrow function
// const calcFactAge2 = (year) =>
//   year <= new Date().getFullYear()
//     ? new Date().getFullYear() - year
//     : `Impossible year. Year needs to be less or equal ${
//         new Date().getFullYear() - year
//       }`;
// console.log(calcFactAge2(2015));
// const age1 = calcFactAge(2016);
// console.log(calcFactAge(2000));
// console.log(calcFactAge(2800));

// let votesInteresting = 20;
// let votesMindblowing = 5;
// let votesFalse = 4;
// const totalUpvotes = votesInteresting + votesMindblowing;
// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";
// alert(message);
// console.log(message);

// if (votesInteresting === votesMindblowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting fact!");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Mindblowing fact!!");
// }

// if (votesMindblowing) {
//   console.log("MINDBLOWING FACT!!");
// } else {
//   console.log("Not so special!");
// }

// const text = "lisbon is the capital of portugal";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact is "${text}". It is "${calcFactAge(
//   2015
// )}" years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }`;
// console.log(str);
// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact);
// console.log(fact[2]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdIn] = fact;
// console.log(createdIn);

// // const newFact = [fact, "society"];
// // result: [["Lisbon is the capital of Portugal", 2015, true], "society"]
// //actually want
// const newFact = [...fact, "society"];
// console.log(newFact);

// const factObj = {
//   //key:text, value:"Lisbon is the capital of Portugal"
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createsummary: function () {
//     return `The fact ${
//       this.text
//     } is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createsummary());

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 7].map(function (el) {
//   return el * 10;
// });
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

/*
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
const allcategories = CATEGORIES.map((el) => el.color);
console.log(allcategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join(" & "))
*/

//DOM manipulation
