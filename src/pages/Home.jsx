import Hero from "../components/Hero";
import { useLoaderData } from "react-router-dom";
import Books from "../components/Book/Books";

const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <Hero></Hero>
      <h1 className="font-bold text-3xl text-center mt-12">Books</h1>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Books key={book.bookId} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;
