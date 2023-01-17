let book1 = {
  title: "Grambling Individual",
  author: "Bosco Waisana",
  year: "2011",
  country: "USA",
}; 

let book2 = {
  title: "Samritan",
  author: "Lydia",
  year: "2012",
  country: "Uganda",
};

// let summary = function (detail) {
//   return {
//     aboutbook1: `This is ${detail.title} by ${detail.author} published on ${detail.year}`,
//     aboutbook2: `This is ${detail.title} by ${detail.author} published on ${detail.year}`,
//   };
// };
let summary = (detail) =>{
  return {
    aboutbook1: `This is ${detail.title} by ${detail.author} published on ${detail.year}`,
    aboutbook2: `This is ${detail.title} by ${detail.author} published on ${detail.year}`,
  };
};

let book1sum = summary(book1);
console.log(book1sum.aboutbook1);
let book2sum = summary(book2);
console.log(book2sum.aboutbook2);

// console.log(book);
// console.log(`${detail.title} by ${detail.author} released in ${detail.year}`);

let number = 0;
let logNumber = () => {
  console.log(number++);
};
let logger = setInterval(logNumber, 100);
clearInterval(logger);

let convert = function (farenheit) {
  return {
    celin: ((farenheit - 32) * 5) / 9,
    kelvin: ((farenheit + 459.57) * 5) / 9,
  };
};
let temp = convert(78);
console.log(temp);
console.log(`The 78 farenheit is ${temp.celin} in celicius`);
