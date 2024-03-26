import React from "react";
import { Link, Navigate } from "react-router-dom";

const Books = ({ book }) => {
  const { author, bookName, image, category, tags, rating, bookId } = book;
  console.log(book);

  return (
    <Link to={`/book/details/${bookId}`}>
      <div className="card w-96 bg-base-100 shadow-xl p-4 border border-[#F3F3F3] flex flex-col min-h-[500px]">
        <div className="flex-grow">
          <figure className="px-10 py-10 bg-[#F3F3F3]">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl w-[200px] h-[150px]"
            />
          </figure>
          <div className="flex flex-wrap gap-4 items-center my-3">
            {tags.map((tag) => (
              <p className="text-[#23BE0A] bg-[#23BE0A10] p-2 px-3 rounded-3xl font-semibold text-[12px] ">
                {tag}
              </p>
            ))}
          </div>
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <p className="my-2">By:{author}</p>
        </div>

        <div className="">
          <hr />
          <div className="flex justify-between mt-2">
            {category}{" "}
            <span className="flex items-center  gap-2">
              {rating} <img src="/src/assets/Vector.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
