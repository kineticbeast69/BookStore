function CourseCard({ item }) {
  return (
    <>
      <div className="card bg-green-400 w-56 shadow-xl my-2 md:w-80 hover:scale-105 duration-200">
        <figure className="px-5 pt-4">
          <img src={item.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-black text-base p-0 md:p-2">
            {item.name}
          </h2>
          <p className="text-black">{item.title}</p>
          <div className="card-actions flex items-start">
            <button className="btn btn-primary text-sm p-1 md:text-xl md:p-3">
              {item.category}
            </button>
            <button className="btn btn-primary text-sm p-1 md:text-xl md:p-3">
              {item.price}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
