// const nestedObjects = {
//     obj1:{
//         a:1,
//         b:2,
//             obj2:{
//             c:3,
//             d:4,
//             obj3:{
//                 e:5,
//                 f:5,
//                 obj4:{
//                     g:6,
//                     h:7,
//                 }
//             }
//         }
//     }

//     }
//     const {obj1:a,b, obj2:{c,d , obj3:{e,f, obj4:{g,h}}} }= nestedObjects
//     console.log(d);

const nestedObject = {
    prop1: 'Value 1',
    prop2: 'Value 2',
    nested1: {
        prop3: 'Value 3',
        prop4: 'Value 4',
        nested2: {
            prop5: 'Value 5',
            prop6: 'Value 6',
            nested3: {
                prop7: 'Value 7',
                prop8: 'Value 8',
                nested4: {
                    prop9: 'Value 9',
                    prop10: 'Value 10'
                }
            }
        }
    }
};

const {
    prop1,
    nested1: { prop3, nested2: { prop5, nested3: { prop7, nested4: { prop9, prop10 } } } }
} = nestedObject;

console.log(prop1);
console.log(prop3);
console.log(prop5);
console.log(prop7);
console.log(prop9);
console.log(prop10);



// //Arraays
let arr = [1, 2, 3, 4, 5, 6]
arr[0] = 5666;
console.log(arr.length)
console.log(arr);
console.log(typeof arr)


// // book
const book = {
    title: "Choices i wish i made earlier",
    author: "Nauman Hassan",
    year: 2023,
    genre: "Fiction"
}
console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(typeof book.year);

// delete a property
const book1 = {
    title: "Choices i wish i made earlier",
    author: "Nauman Hassan",
    year: 2023,
    genre: "Fiction",
    publisher: "J&J publications",
    getSummary: function () {
        console.log(`title of book is ${book1.title} and is written by ${book1.author}, the book was published back in ${2023} and it's of ${book1.genre} genre. Lastly the publisher is ${book1.publisher}`);
    }


}
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.genre);
console.log(typeof book1.year);
delete book1.year;
console.log(book1);
book1.getSummary();

// Nested Objects
const library = {
    name: "My Library",
    books: [
        {
            title: "dune part 1",
            author: "Author 1",
            year: 2000}, {
            title: "dune part 2",
            author: "Author 2",
            year: 2010},{
            title: "dune part3",
            author: "Author 3",
            year: 2020}
    ]
};

function logBookTitles(library) {
    for (let i = 0; i < library.books.length; i++) {
        console.log(library.books[i].title);
    }
}

logBookTitles(library);

//  object destructuring

const person = {
    name1:"Alice",
    age : 30,
    address:{
        city:"wonderland",
        zip: 12345,
    }
}
const{name1, age, address:{city}} = person;
console.log(`Name of person is ${name1} Her age is ${age} and she lives in ${city}`);
