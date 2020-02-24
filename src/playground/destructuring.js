// console.log('destructuring');

// const person = {
//   // name: 'Nick',
//   age: 33,
//   location: {
//     city: 'Vancouver',
//     temp: 9
//   }
// };

// const { name = 'BillyBob', age } = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${temp} in ${city}.`)
// };


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//



const address = ['3968 Yew St', 'Vancouver', 'British Columbia', 'V6L 3BL'];

const [street, state, province, postcode] = address;

console.log(`You are in ${address[1]} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.75', '$3.25'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)



