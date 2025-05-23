//BOOKS EXERCISE WITH THE HELP OF FILTER

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 const myBooks = books.filter((book) => book.genre === 'Fiction');
console.log(myBooks);
//output:
//[
//  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
//]


const requiredBook = books.filter((book) => {
     return book.genre === 'History';
 });

console.log(reuiredbook)//Guess the output

const MyBook = books.filter((bk) => { 
    return ((bk.genre === 'History') && (bk.publish >= 1995))
});

console.log(MyBook);//Guess the output

