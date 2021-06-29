//book

class BookLibrary {
    status = 0;
    getBooks() {
        let books = {
            "the alchemist": { bname: "Alchemist", bauthor: "Paulo chelo", price: 200, no_copies: 5 },
            "twostates": { bname: "two states", bauthor: "chetan bagath", price: 500, no_copies: 15 },
            "halfgirlfriend": { bname: "half girlfriend", bauthor: "chetan bagath", price: 400, no_copies: 25 },
            "TwinklingStars": { bname: "Twinkling Stars", bauthor: "Nirupama roy", price: 200, no_copies: 35 },
            "The day dreamer": { bname: "The daydreamer", bauthor: "Aansu Nirupama", price: 1000, no_copies: 50 }
        }
        return books
    }

    findBook(bname) {
        let buks = this.getBooks();
        if (bname in buks) {
            console.log("Book available",bname);
            return 0
        } else {

            console.log("Book not available",bname);
            return 0
        }


    }

}
var book1 = new BookLibrary();
book1.findBook("The day dreamer");


