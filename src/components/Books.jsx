import React from "react";

const Books = ({ book }) => {
  const { title, author, price, genre, publishedYear } = book;
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <p>${price}</p>
        <p>genre: {genre}</p>
        <p>Date: {publishedYear}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Books;
