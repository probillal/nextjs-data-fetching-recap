const ProductCard = ({ product }) => {
  const { name, category, price, stock, brand } = product;
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>${price}</p>
        <p>Stock: {stock}</p>
        <p>Brand: {brand}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
