import React from "react";

const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-[#13131310] py-4 rounded-lg">
        Book{" "}
      </h1>
      <div>drop down</div>
      <br />

      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Normal
        </a>
        <a role="tab" className="tab tab-active">
          Normal
        </a>
      </div>
    </div>
  );
};

export default ListedBooks;
