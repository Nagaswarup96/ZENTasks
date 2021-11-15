// a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//    a String representing the studio, and a String representing the rating as its arguments,
//    and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument,
//    and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances.The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//    the studio “Eon Productions”, and the rating “PG­13”

console.log("\n\n\n************Question1***************\n\n\n");

class Movie {
  constructor(title, studio, rating = "PG") {
    (this.title = title), (this.studio = studio), (this.rating = rating);
    console.log(`
  Title  : ${this.title}
  Studio : ${this.studio}
  Rating : ${this.rating}
      `);
  }

  getPG(args) {
    const newArr = args.filter((arg) => arg.rating.includes("PG"));
    return newArr;
  }
}

const film = new Movie("Casino Royale", "Eon Productions", "PG13");

const movies = [
  {
    title: "Casino Royale",
    studio: "Eon Productions",
    rating: "PG13",
  },
  {
    title: "Bahubali",
    studio: "Varahi Productions",
    rating: "R13",
  },
  {
    title: "K.G.F",
    studio: "Hombale Productions",
    rating: "PG13",
  },
  {
    title: "Kirik Party",
    studio: "Paramva Studios",
    rating: "R12",
  },
  {
    title: "MEB",
    studio: "GA Productions",
    rating: "PG13",
  },
];

console.log(...film.getPG(movies));
