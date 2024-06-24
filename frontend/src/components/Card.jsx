import { books } from "../data/books";
function Card() {
  const booksData = books.filter((data) => data.category === "premium");
  console.log(booksData);
  return <></>;
}
export default Card;
