import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPaper } from "react-icons/io";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    author,
    bookName,
    image,
    category,
    tags,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    bookId,
  } = data;
  return (
    <div className="flex gap-8 p-6 border rounded-lg mt-4">
      <div>
        <img className="w-[200px] h-[150px]" src={image} alt="" />
      </div>

      <div>
        <h1 className="font-bold text-3xl">{bookName}</h1>
        <p>By : {author}</p>
        <div className="flex">
          <div className="flex gap-2">
            {tags.map((data) => (
              <p
                key={data.bookId}
                className="text-[#23BE0A] bg-[#23BE0A10] p-2 px-3 rounded-3xl font-semibold text-[12px]"
              >
                #{data}
              </p>
            ))}
          </div>
          <p className="flex items-center gap-2 p-2">
            {" "}
            <CiLocationOn />
            Year of Publishing:{yearOfPublishing}
          </p>
        </div>

        <div className="flex text-gray-500">
          <p className="flex items-center gap-2 p-2">
            <LiaUserFriendsSolid /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2 p-2">
            <IoIosPaper />
            Pages: {totalPages}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="rounded-3xl bg-[#328EFF15] text-[#328EFF] p-3">
            Category:{category}
          </p>
          <p className="rounded-3xl bg-[#FFAC3325] text-[#FFAC33] p-3">
            Rating:{rating}
          </p>
          <Link to={`/book/details/${bookId}`}>
            <button className="text-white font-semibold bg-[#23BE0A] p-3 rounded-3xl">
              View Details
            </button>
          </Link>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Card;
