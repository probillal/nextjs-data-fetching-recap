import Books from "@/components/Books";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();
  return (
    <div>
      <h2>Books: {books.length}</h2>
      <div className="grid grid-cols-3 gap-3">
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
