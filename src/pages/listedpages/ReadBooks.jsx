import React, { useEffect, useState } from "react";
import getLocalStorage from "../../util/getlocal";
import Card from "../../components/card/Card";

const ReadBooks = () => {
  const [readbook, setReadBooks] = useState([]);
  useEffect(() => {
    const getLocalItem = getLocalStorage("read");
    console.log(getLocalItem);
    setReadBooks(getLocalItem);
  }, []);

  console.log(readbook);
  return (
    <div className="space-y-7">
      {readbook.map((data) => (
        <Card key={data.bookId} data={data}></Card>
      ))}
    </div>
  );
};

export default ReadBooks;
