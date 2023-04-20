import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-5.webp';
import { Context } from '../../../utils/context';
import './CartItem.scss';
import { useContext } from 'react';
const CartItem = () => {
  const { cartItems, removeFromCartHandler, cartProductQuantityHandler } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((cartItem) => (
        <div className="search-result-item" key={cartItem.id}>
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                cartItem.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{cartItem.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => {
                removeFromCartHandler(cartItem);
              }}
            />
            <div className="quantity-buttons">
              <span
                onClick={() => {
                  cartProductQuantityHandler('decre', cartItem);
                }}
              >
                -
              </span>
              <span>{cartItem.attributes.quantity}</span>
              <span
                onClick={() => {
                  cartProductQuantityHandler('incre', cartItem);
                }}
              >
                +
              </span>
            </div>
            <div className="text">
              <span>{cartItem.attributes.quantity}</span>
              <span>X</span>
              <span className="highlight">
                &#8377;
                {cartItem.attributes.price * cartItem.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
