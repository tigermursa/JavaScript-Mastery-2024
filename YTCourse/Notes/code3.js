//! Array

const myArray = [12, 56, 3, 6, 9, 90];
//console.log(myArray.at(-2));

const name1 = {
  0: "hasan",
  1: "hossain",
};

const name2 = ["hasan", "hossain", "lala"];

// console.log(name1[1]);
// console.log(name2[1]);

// for (let item of name2) {
//   console.log(item);
// }

//! forEach vs map
// map return an array of value forEach don't

//const usingMap = name2.map((names) => console.log(names));

name2.push("Mue")
console.log(name2);
name2.splice(3,3,"Mursalin");
console.log(name2);


//indexOf

const schools = ["hasanali", 'alamin', "mtripith"];

function searchByAlphabet(array, alphabet) {
  const results = array.filter(school => school.toLowerCase().startsWith(alphabet.toLowerCase()));
  return results;
}

// Example: Searching for schools starting with 'a'
const searchResults = searchByAlphabet(schools, 'mt');
console.log(searchResults);

// ! unique value new Set? 