class LibraryItem{
    constructor(title, name, price, story, id){
    this.name = name
    this.title = title
    this.price = price
    this.story = story
    this.id = id
    this.CheckOutBy = null
    }

    CheckOut(user){
        if(!this.CheckOutBy){
             this.checkOut = user;
             console.log(`${this.tile} checked out ${user}`)
        }
        else 
         console.log(`${this.title} is already taken by ${this.checkOutBY}`);
    }


}


// Creating new library items
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "Fiction", "9780743273565");
const dvd1 = new DVD("Inception", "Christopher Nolan", 148, "Science Fiction", "PG-13");
const magazine1 = new Magazine("National Geographic", "Various", 80, "Science", "April 2023", "Monthly");

// Check out and return operations
book1.checkOut("User123");
book1.returnItem();
book1.checkOut("User456");

// Get all checked out items
const checkedOutItems = LibraryItem.getCheckedOutItems();