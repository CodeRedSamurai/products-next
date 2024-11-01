import { NextResponse } from "next/server";
import connect from "../../../lib/db";
import Product from "../../../lib/models/product";

export const GET = async (request) => {
  try {
    await connect();
    //const products = await Product.find();
    return new NextResponse(
      JSON.stringify([
        {
          _id: "6723b0f2d7bd28a154cc0f4e",
          name: "Mahabharata",
          author: "Vyas",
          price: 100,
          part: 1,
          Genre: "Mythology",
          __v: 0,
        },
        {
          _id: "6723b1e3d7bd28a154cc0f55",
          name: "Ramayan",
          author: "Valmiki",
          price: 100,
          part: 1,
          Genre: "Mythology",
          __v: 0,
        },
        {
          _id: "6723b615d7bd28a154cc0f5d",
          name: "Casablanca",
          author: "Tim west",
          price: 100,
          part: 2,
          Genre: "Western",
          __v: 0,
        },
      ]),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse({ err: error, req: request }, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await connect();
    await new Product(body).save();
    return new NextResponse(JSON.stringify({ message: "product added" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

// return NextResponse.json({
//   "metadata": { "product": "book" },

//   "book": [
//     {
//       "name": "Harry Potter",
//       "author": "JK rowling",
//       "price": 50,
//       "part": 1,
//       "Genre": "Fantasy"
//     },
//     {
//       "name": "Bladerunner",
//       "author": "Steve Chow",
//       "price": 100,
//       "part": 2,
//       "Genre": "Sci-fi"
//     },
//     {
//       "name": "Inception",
//       "author": "Christopher Nolan",
//       "price": 150,
//       "part": 3,
//       "Genre": "Action"
//     },
//     {
//       "name": "Interstellar",
//       "author": "Christopher Nolan",
//       "price": 150,
//       "part": 4,
//       "Genre": "Sci-fi"
//     },
//     {
//       "name": "The Dark Knight",
//       "author": "Christopher Nolan",
//       "price": 100,
//       "part": 5,
//       "Genre": "Action"
//     },
//     {
//       "name": "The Lord of the Rings",
//       "author": "JRR Tolkien",
//       "price": 200,
//       "part": 6,
//       "Genre": "Fantasy"
//     },
//     {
//       "name": "The Hobbit",
//       "author": "JRR Tolkien",
//       "price": 100,
//       "part": 7,
//       "Genre": "Fantasy"
//     },
//     {
//       "name": "The Avengers",
//       "author": "Joss Whedon",
//       "price": 150,
//       "part": 8,
//       "Genre": "Superhero"
//     },
//     {
//       "name": "The Hunger Games",
//       "author": "Suzanne Collins",
//       "price": 100,
//       "part": 9,
//       "Genre": "Dystopia"
//     },
//     {
//       "name": "The Percy Jackson and the Olympians",
//       "author": "Rick Riordan",
//       "price": 150,
//       "part": 10,
//       "Genre": "Fantasy"
//     },
//     {
//       "name": "The Mortal Instruments",
//       "author": "Cassandra Clare",
//       "price": 150,
//       "part": 11,
//       "Genre": "Fantasy"
//     },
//     {
//       "name": "The Maze Runner",
//       "author": "James Dashner",
//       "price": 100,
//       "part": 12,
//       "Genre": "Dystopia"
//     },
//     {
//       "name": "The Giver",
//       "author": "Lois Lowry",
//       "price": 100,
//       "part": 13,
//       "Genre": "Dystopia"
//     },
//     {
//       "name": "The Fault in Our Stars",
//       "author": "John Green",
//       "price": 100,
//       "part": 14,
//       "Genre": "Romance"
//     },
//     {
//       "name": "The Perks of Being a Wallflower",
//       "author": "Stephen Chbosky",
//       "price": 100,
//       "part": 15,
//       "Genre": "Coming-of-age"
//     },
//     {
//       "name": "The Catcher in the Rye",
//       "author": "J.D. Salinger",
//       "price": 100,
//       "part": 16,
//       "Genre": "Coming-of-age"
//     },
//     {
//       "name": "To Kill a Mockingbird",
//       "author": "Harper Lee",
//       "price": 150,
//       "part": 17,
//       "Genre": "Classic"
//     },
//     {
//       "name": "The Great Gatsby",
//       "author": "F. Scott Fitzgerald",
//       "price": 150,
//       "part": 18,
//       "Genre": "Classic"
//     },
//     {
//       "name": "1984",
//       "author": "George Orwell",
//       "price": 100,
//       "part": 19,
//       "Genre": "Dystopia"
//     },
//     {
//       "name": "The Handmaid's Tale",
//       "author": "Margaret Atwood",
//       "price": 150,
//       "part": 20,
//       "Genre": "Dystopia"
//     },
//     {
//       "name": "The Nightingale",
//       "author": "Kristin Hannah",
//       "price": 150,
//       "part": 21,
//       "Genre": "Historical Fiction"
//     },
//     {
//       "name": "The Help",
//       "author": "Kathryn Stockett",
//       "price": 150,
//       "part": 22,
//       "Genre": "Historical Fiction"
//     }
//   ]
// }
// );
