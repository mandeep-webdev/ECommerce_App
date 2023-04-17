import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-5.webp';
import './CartItem.scss';
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>X</span>
            <span className="highlight">&#8377;1300</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
