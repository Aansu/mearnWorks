//book

class BookLibrary {
    status = 0;
    getBooks() {
        let books = {
            "the alchemist": { bname: "Alchemist", bauthor: "Paulo chelo", price: 200, no_copies: 5, sold: 12 },
            "twostates": { bname: "two states", bauthor: "chetan bagath", price: 500, no_copies: 15, sold: 8 },
            "halfgirlfriend": { bname: "half girlfriend", bauthor: "chetan bagath", price: 400, no_copies: 25, sold: 4 },
            "TwinklingStars": { bname: "Twinkling Stars", bauthor: "Nirupama roy", price: 200, no_copies: 15, sold: 10 },
            "The day dreamer": { bname: "The daydreamer", bauthor: "Aansu Nirupama", price: 1000, no_copies: 50, sold: 15 }
        }
        return books
    }

    findBook(bname) {
        let buks = this.getBooks();
        if (bname in buks) {
            return 1
        } else {
            return 0
        }
    }

    findCopies(bname) {
        let buks = this.getBooks();
        if (bname in buks) {
            if (buks[bname]["no_copies"] == 0) {
                console.log("Copies not available");
            } else {
                var aval_copies=buks[bname]["no_copies"]-buks[bname]["sold"];
                if(aval_copies==0){
                    console.log("Book Sold out");
                }else{
                    console.log("Book in stock",aval_copies);
                }

            }

        } else {
            console.log("No Book Available");

        }

    }

}
var book1 = new BookLibrary();
var book_search = book1.findBook("TwinklingStars");
var search = book_search == 0 ? "Book not available" : "Book Available";
console.log(search);
book1.findCopies("TwinklingStars")


