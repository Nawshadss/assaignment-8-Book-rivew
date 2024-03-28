import React, { useEffect, useState } from "react";
import getLocalStorage from "../../util/getlocal";
import Card from "../../components/card/Card";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const getLocalItem = getLocalStorage("wish");
    console.log(getLocalItem);
    setWishlist(getLocalItem);
  }, []);

  console.log(wishlist);
  return (
    <div className="space-y-7">
      {wishlist.map((data) => (
        <Card key={data.bookId} data={data}></Card>
      ))}
    </div>
  );
};

export default WishList;
