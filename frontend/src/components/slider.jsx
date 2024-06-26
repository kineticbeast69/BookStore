import { useContext } from "react";
import { Bookcontext } from "../context/bookContext";
import Card from "./card";
function Slider() {
  const BookData = useContext(Bookcontext);
  const books = BookData.data.filter((item) => item.category === "free");
  console.log(books);
  return (
    <>
      <div className="-my-6 w-full md:my-8 md:p-6">
        <h1 className="text-3xl text-blue-500 font-semibold pl-2 md:text-7xl md:font-bold">
          Free offered Books
        </h1>
        <p className="p-2 text-base-300 md:text-xl text-white">
          Here You can see all the books that are free to read and can be read
          out any time.
        </p>
        <div className="carousel w-full">
          <div className="carousel-item" id="item">
            {books.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
