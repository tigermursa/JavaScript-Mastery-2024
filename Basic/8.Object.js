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
