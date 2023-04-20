import { useNavigate } from 'react-router-dom';
import './Product.scss';
const Product = ({ product, id }) => {
  const { img, title, price } = product;
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate('/product/' + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + img.data[0].attributes.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">&#8377;{price}</span>
      </div>
    </div>
  );
};

export default Product;
