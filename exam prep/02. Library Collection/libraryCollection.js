class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw Error('Not enough space in the collection.');
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        if (!this.findBook(bookName)) {
            throw Error(`${bookName} is not in the collection.`)
        }
        for (const book of this.books) {
            if (book.bookName == bookName) {
                if (book.payed == true) {
                    throw Error(`${bookName} has already been paid.`);
                } else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }
    }
    removeBook(bookName) {
        if (!this.findBook(bookName)) {
            throw Error('The book, you\'re looking for, is not found.');
        }
        for (let i = 0; i < this.books.length; i++) {
            const currentBook = this.books[i];
            if (currentBook.bookName == bookName) {
                if (!currentBook.payed) {
                    throw Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    this.books.splice(i, 1)
                    return `${bookName} remove from the collection.`
                }
            }
        }
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            const spaceLeft = Math.abs(this.books.length - this.capacity);
            const sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            const result = [`The book collection has ${spaceLeft} empty spots left.`]
            for (const book of sorted) {
                const bookToAdd = `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
                result.push(bookToAdd);
            }
            return result.join('\n')
        }

        if (!this.findAuthor(bookAuthor)) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }

        for (const book of this.books) {
            if (book.bookAuthor == bookAuthor) {
                return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
            }
        }
    }



    findBook(title) {
        let isFound = false;
        for (const book of this.books) {
            if (book.bookName == title) {
                isFound = true
                return isFound
            }
        }
        return isFound;
    }
    findAuthor(authorName) {
        let isFound = false;
        for (const book of this.books) {
            if (book.bookAuthor == authorName) {
                isFound = true
                return isFound
            }
        }
        return isFound;
    }
}

//input 1
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// Output 1
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

// Input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

//output 2
// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.

// Input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Output 3
// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

// Input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// Output 4
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

//Input 5
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

//Output 5
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.


