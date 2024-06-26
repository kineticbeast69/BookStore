import { createContext, useState } from "react";
import { books } from "../data/books";
export const Bookcontext = createContext(null);

const BookProvider = (props) => {
  const [data, setdata] = useState(books);
  return (
    <Bookcontext.Provider value={{ data, setdata }}>
      {props.children}
    </Bookcontext.Provider>
  );
};
export default BookProvider;
