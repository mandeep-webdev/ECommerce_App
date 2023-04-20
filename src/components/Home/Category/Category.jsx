import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((category) => (
          <div
            className="category"
            key={category.id}
            onClick={() => navigate(`/category/${category.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                category.attributes.img.data.attributes.url
              }
              alt="categories-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
