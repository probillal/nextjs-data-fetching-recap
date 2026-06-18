const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2>Products: {products.length}</h2>
    </div>
  );
};

export default ProductsPage;
