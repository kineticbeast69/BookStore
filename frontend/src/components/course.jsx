import { useContext } from "react";
import { Bookcontext } from "../context/bookContext";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard";
function Course() {
  const booksData = useContext(Bookcontext);
  const books = booksData.data.filter((data) => data.category === "premium");
  console.log(books);
  return (
    <>
      <div className="">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                We're delighted to have you{" "}
                <span className="text-blue-500">Here! :)</span>
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                recusandae officia quas eum non praesentium ratione porro atque
                incidunt saepe ea repellendus dolorem reiciendis in harum earum
                soluta consequuntur quaerat.
              </p>
              <button className="btn btn-primary">
                <Link to="/">Home</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center text-2xl py-3 text-orange-600 font-bold  md:py-10 md:text-5xl">
            Premium Books
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 px-20 min-h-screen ">
            {books.map((item) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
