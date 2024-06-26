function Card({ book }) {
  return (
    <>
      <div className="card bg-base-100 w-56 shadow-xl m-2 border border-slate-300 md:w-64 lg:w-80 hover:scale-90 duration-200">
        <figure>
          <img src={book.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold pr-2 md:text-3xl ">
            {book.name}
            <div className="badge badge-secondary">{book.category}</div>
          </h2>
          <p>{book.title}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline text-base p-1 text-blue-500">
              {book.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
