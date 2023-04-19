import Product from './Product/Product';
import './Products.scss';
const Products = ({ headingText, products }) => {
  return (
    <div className="products-container">
      <div className="sec-heading">{headingText}</div>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            product={product.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
