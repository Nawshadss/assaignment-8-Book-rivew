import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import getLocalStorage from "../util/getlocal";
import setItemLocal from "../util/setlocal";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const [read, setRead] = useState([]);
  const [addWishList, setWishLish] = useState([]);

  const haldeRead = () => {
    const getlocal = getLocalStorage("read");

    console.log(getlocal);
    const isExist = getlocal.find((data) => data.bookId === bookId);
    if (isExist) {
      toast("Book alredy Exist");
    } else {
      setItemLocal("read", oneBook);
      toast("Book added to read");
    }
  };

  const hanldeWishList = () => {
    const getlocal = getLocalStorage("read");
    const getWish = getLocalStorage("wish");

    console.log(getlocal);
    const isExist = getlocal.find((data) => data.bookId === bookId);
    const wishExist = getWish.find((data) => data.bookId === bookId);
    if (isExist) {
      toast("Can not be added in wihs list ");
    } else if (wishExist) {
      toast("Book alredy Exist in Wish List ");
    } else {
      setItemLocal("wish", oneBook);
      toast("Book  added to Wish List ");
    }
  };
  const param = useParams();
  const bookdetails = useLoaderData();
  console.log(bookdetails, param.id);
  const oneBook = bookdetails.find((data) => data.bookId == param.id);
  console.log(oneBook);
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
  } = oneBook;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{bookName}</h2>
          <p className="font-semibold">By : {author}</p>
          <hr />
          <p className="font-semibold">{category}</p>
          <hr />
          <p>
            <span>Review:</span>
            {review}
          </p>
          <br />
          <div className="flex gap-2 items-center">
            <span className="font-bold">Tags:</span>
            {tags.map((tag) => (
              <span className="bg-[#23BE0A10] text-[#23BE0A] m-0 p-3 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>
          <br />
          <hr />
          <p>
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
          <div className="space-x-5">
            <button
              className="p-4 border rounded-lg font-semibold"
              onClick={haldeRead}
            >
              Read
            </button>
            <button
              onClick={hanldeWishList}
              className="p-4 border rounded-lg bg-[#50B1C9] text-white font-semibold"
            >
              Wish List
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
