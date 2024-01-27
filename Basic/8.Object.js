// 1)Object Literal ,where I have stored string number boolean object array and null ..

const person = {
  name: "Mursalin Hossain",
  age: 24,
  isMarried: false,
  email: "mursalin@gmail.com",
  phone: "+880156422645",
  education: {
    SSC: {
      institute: "Frost Academy",
      result: "GPA:5",
      year: "2016",
      place: "Hui",
      stayed: [2011, 2012, 2013, 2014, 2015, 2016],
    },
    HCS: {
      institute: "Dearest Academy",
      result: "GPA:3",
      year: "2019",
      place: "Hui",
      stayed: null,
    },
  },
};

//accessing the object with dot
console.log(person.education.SSC.institute); //Frost Academy

//2) Array , Array is actually an Object

//3) Function ,Function  is also an Object

//4) Date() , also an Object

/* 5) Map
const myMap = new Map();
myMap.set("key1", "value1");
*/

/* 6) Set:
const mySet = new Set([1, 2, 3, 4, 5]);
*/

/* 7) Set: Promise
const myPromise = new Promise((resolve, reject) => {
  // Async operations
});
*/

/* 7) Set: Error
const customError = new Error("This is a custom error.");
});
*/
